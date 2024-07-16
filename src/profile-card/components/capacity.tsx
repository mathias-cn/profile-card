interface CapacityProps {
    capacityItem: [string, string];
}

export function Capacity({ capacityItem }: CapacityProps) {
    return (
        <div key={capacityItem[0]} className={`text-black rounded-sm p-1 text-center ${capacityItem[1]}`}>
            <p>{capacityItem[0]}</p>
        </div>
    )
}