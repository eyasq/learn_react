import { useState } from "react";

export function TabbedView() {
    const [activeTab, setActiveTab] = useState("User"); // default tab

    const userData = {
        name: "Mike Johnson",
        gender: "fluid",
        "Political affiliation": "cuck"
    };

    const settingsData = {
        theme: "dark",
        notifications: "enabled",
        language: "English"
    };

    const statsData = {
        posts: 42,
        likes: 128,
        followers: 760
    };

    // Helper function to display any object as key-value pairs
    function renderData(data) {
        return (
            <ul>
                {Object.entries(data).map(([key, value], i) => (
                    <li key={i}>
                        <strong>{key}:</strong> {value}
                    </li>
                ))}
            </ul>
        );
    }

    return (
        <div>
            <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
                <button onClick={() => setActiveTab("User")}>User Info</button>
                <button onClick={() => setActiveTab("Settings")}>Settings</button>
                <button onClick={() => setActiveTab("Stats")}>Stats</button>
            </div>

            <div style={{ padding: "1rem", border: "1px solid #ccc" }}>
                {activeTab === "User" && renderData(userData)}
                {activeTab === "Settings" && renderData(settingsData)}
                {activeTab === "Stats" && renderData(statsData)}
            </div>
        </div>
    );
}
