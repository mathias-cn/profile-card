import { Capacities } from "./capacities"

interface DescriptionProps {
    language: string
}

export function Description({ language }: DescriptionProps) {
    return (
        <div className="px-4 space-y-1">
            <h1 className="text-2xl font-semibold">Mathias Carrizo Navarre</h1>
            <p>
                {language == 'en' ?
                ('Full-stack Web Dev student. When not studying i like to go to the gym, watch soccer, go out with friends and enjoy the moment.')
                : language == 'pt' ?
                ('Estudante de Desenvolvimento Web Full-Stack. Quando não estou estudando, gosto de ir à academia, assistir futebol, sair com os amigos e aproveitar o momento.')
                : 
                ('Estudiante de Programácion Web Full-Stack. Cuando no estoy estudiando, me gusta ir al gimnasio, mirar futbol salir con amigos y disfrutar del momento.')
                }
            </p>
            <Capacities />
        </div>
    )
}