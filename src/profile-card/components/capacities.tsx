import { Capacity } from "./capacity"

export function Capacities() {
    const capacitiesArray = [
        ["HTML+CSS", "bg-orange-500"],
        ["JavaScript", "bg-yellow-400"],
        ["TypeScript", "bg-blue-500"],
        ["React", "bg-blue-300"],
        ["NodeJS", "bg-green-500"],
        ["PHP", "bg-purple-600"],
        ["MySQL", "bg-blue-300"],
        ["Git - Github", "bg-gray-500"],
        ["Web Design", "bg-red-400"]
    ]

    return (
        <div className="flex flex-wrap w-full gap-2 pt-2">
            {capacitiesArray.map(capacity => {
                return (
                    <Capacity 
                        key={capacity[0]}
                        capacityItem={[capacity[0], capacity[1]]}
                    />
                )
            })}
        </div>
    )
}