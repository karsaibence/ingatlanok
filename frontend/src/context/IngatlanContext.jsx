import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const IngatlanContext = createContext();

export const IngatlanProvider = ({ children }) => {
    const [ingatlanok, setIngatlanok] = useState([]);
    const [kat, setKat] = useState([]);
    const [loading, setLoading] = useState(true);
    const [helyesLista, setHelyesLista] = useState([]);

    const fetchIngatlanData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/ingatlan")
            setIngatlanok(response.data)
        } catch (error) {
            console.log("Hiba a betöltés során:", error)
        } finally {
            setLoading(false)
        }
    }

    const fetchKatData = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/kategoria")
            setKat(response.data)
        } catch (error) {
            console.log("Hiba a betöltés során:", error)
        } finally {
            setLoading(false)
        }
    }
    function transformIdToCategory() {
        const temp = [...ingatlanok]
        for (let i = 0; i < temp.length; i++) {
            const e = temp[i];
            kat.forEach(el => {
                if (el.id === e.id) {
                    e.kategoria = el.name
                }
            });
        }
        setHelyesLista([...temp]);
        console.log(ingatlanok)
    }


    useEffect(() => {
        fetchIngatlanData();
        fetchKatData();
    }, [])

    return (
        <IngatlanContext.Provider value={{ ingatlanok, kat, helyesLista, transformIdToCategory }}>
            {children}
        </IngatlanContext.Provider >
    )
}