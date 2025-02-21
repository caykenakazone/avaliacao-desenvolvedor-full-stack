import { useState, useEffect } from "react";
import {
    PieChart,
    Pie,
    Cell,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

const COLORS = ["#4F46E5", "#22C55E", "#F59E0B"]; // Azul, Verde, Laranja

const UrlStats = ({ idShortUrl }: { idShortUrl: string }) => {
    const [stats, setStats] = useState({ lastHour: 0, lastDay: 0, lastMonth: 0 });

    useEffect(() => {
        if (!idShortUrl) return;

        const fetchStats = async () => {
            const response = await fetch(`http://localhost:8080/url/stats?idShortUrl=${idShortUrl}`);
            const data = await response.json();
            setStats(data);
        
        };

        fetchStats();
    }, [idShortUrl]);

    // 🔹 Formatar os dados para o gráfico de pizza
    const chartData = [
        { name: "Última Hora", value: stats.lastHour },
        { name: "Último Dia", value: stats.lastDay },
        { name: "Último Mês", value: stats.lastMonth },
    ];

    return (
        <div className="p-6 bg-white shadow-md rounded-lg w-full md:w-2/3 mx-auto">
            <h2 className="text-xl font-bold text-center mb-4">📊 Estatísticas da URL</h2>

            {/* 📌 Estatísticas em Texto */}
            <div className="mb-6 text-center ">
                <p className="text-lg font-semibold">📌 Última Hora: <span className="text-blue-600">{stats.lastHour} visitas</span></p>
                <p className="text-lg font-semibold">📌 Último Dia: <span className="text-green-600">{stats.lastDay} visitas</span></p>
                <p className="text-lg font-semibold">📌 Último Mês: <span className="text-orange-600">{stats.lastMonth} visitas</span></p>
            </div>

            {/* 📊 Gráfico de Pizza */}
            <div className="flex justify-center">
                <ResponsiveContainer width={"100%"} height={300} 
                
                >
                    <PieChart>
                        <Pie
                            data={chartData}
                            cx="50%" 
                            cy="50%"
                            outerRadius={70}
                            fill="#8884d8"
                            dataKey="value"
                            label={({name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`} 
                        >
                            {chartData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index]} />
                            ))}
                        </Pie>
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default UrlStats;
