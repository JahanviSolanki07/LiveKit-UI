import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CallButton({ buyerId, sellerId }) {
    const navigate = useNavigate();

    const handleStartCall = async () => {
        try {
            if (!buyerId || !sellerId) {
                return alert("Missing buyer or seller ID");
            }

            const roomName = `${buyerId}-${sellerId}`;

            // `http://localhost:4000/token?room=${roomName}&identity=${buyerId}&name=Sayan`
            const res = await axios.get(
                `https://live-kit-iota.vercel.app/token?room=${roomName}&identity=${Date.now()}&name=Sayan`
            );

            const { token, livekitUrl, room } = res.data;

            if (!token || !livekitUrl) {
                throw new Error("Invalid token response from server");
            }

            navigate(`/call/${room}`, {
                state: { token, livekitUrl },
            });

        } catch (err) {
            console.error("Error creating call:", err);
            alert("Failed to start call. Try again.");
        }
    };

    return (
        <button
            onClick={handleStartCall}
            className="px-4 py-2 bg-green-600 mx-auto w-[200px]  hover:bg-green-700 text-white rounded-lg font-semibold shadow-md transition"
        >
            Call
        </button>
    );
}
