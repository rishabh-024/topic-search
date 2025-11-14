import { useMemo, useState } from "react";
import { topics } from "../data/topics";

function TopicSearch() {
    const [query, setQuery] = useState("");

    const filteredTopics = useMemo(() => {
        const q = query.trim().toLowerCase();
            if (!q) return topics;
            return topics.filter((t) => t.name.toLowerCase().includes(q));
    }, [query]);

  return (
    <div className="min-h-screen bg-slate-50 flex items-start justify-center py-12 px-4">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-md p-6">
            <header className="mb-6">
                <h1 className="text-2xl font-semibold text-slate-800">
                    TOPIC SEARCH
                </h1>
                <p className="mt-1 text-sm text-slate-500">
                    Search by topic name.
                </p>
            </header>

            <div className="flex gap-3 items-center">
                <label htmlFor="topic-search" className="sr-only">
                    Search topics
                </label>

                <div className="flex-1 relative">
                    <input
                        id="topic-search"
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search topic e.g. Thermodynamics, organic..."
                        className="w-full pl-4 pr-28 py-3 border border-slate-200 rounded-lg shadow-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-400 transition"
                    />

                    <div className="absolute right-2 top-2 flex gap-2">
                        <button
                            onClick={() => setQuery("")}
                            className="px-3 py-1.5 text-sm rounded-md bg-slate-100 text-slate-600 border border-slate-200 hover:bg-slate-200 transition"
                            aria-label="Clear search"
                            title="Clear"
                        >
                            Clear
                        </button>
                    </div>
                </div>
            </div>

            <main className="mt-6">
                {filteredTopics.length > 0 ? (
                    <ul className="grid gap-4">
                        {filteredTopics.map((t) => (
                            <li key={t.id} className="p-4 bg-slate-50 border border-slate-100 rounded-lg flex justify-between items-center">
                                <div>
                                    <h2 className="text-lg font-medium text-slate-800"> {t.name} </h2>
                                    <p className="text-sm text-slate-500"> {t.category} </p>
                                </div>
                                <div className="text-xs text-slate-400">
                                    ID: {t.id}
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <div className="py-10 text-center">
                        <p className="text-red-600 font-medium">
                            No topics found
                        </p>
                        <p className="mt-2 text-sm text-slate-500">
                            Try a different search or clear the input.
                        </p>
                    </div>
                )}
            </main>

            <footer className="flex mt-6 text-xs text-slate-400 text-center gap-1">
                &copy; All right reserved to  
                <p className="text-gray-950">
                    Rishabh Giri
                </p>
            </footer>
        </div>
    </div>
    );
}

export default TopicSearch;