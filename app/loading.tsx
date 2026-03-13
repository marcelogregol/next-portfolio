import { HiSparkles } from "react-icons/hi2";

export default function Loading() {
    return (
        <main className="loading-screen" aria-label="Loading page">
            <div className="loading-icon-wrap">
                <span className="loading-icon-ring loading-icon-ring-a" />
                <span className="loading-icon-ring loading-icon-ring-b" />
                <div className="loading-icon-core">
                    <HiSparkles className="loading-icon" />
                </div>
            </div>
        </main>
    );
}
