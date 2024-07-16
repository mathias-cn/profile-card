export function Capacities() {
    const capacitiesArray = [
        "HTML+CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "NodeJS",
        "PHP",
        "MySQL",
        "Git - Github",
        "Web Design"
    ]

    return (
        <div className="flex flex-wrap w-full gap-2 pt-2">
            {capacitiesArray.map(capacity => {
                return (
                    <div key={capacity} className="bg-blue-300 text-black rounded-sm p-1 text-center">
                        <p>{capacity}</p>
                    </div>
                )
            })}
        </div>
    )
}