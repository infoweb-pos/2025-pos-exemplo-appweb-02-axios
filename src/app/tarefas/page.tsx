"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import { Cabecalho, Conteiner, Corpo } from "@/componentes";

interface Tarefas {
	id: number;
	todo: string;
	completed: boolean;
	userId: number;
}

const Home = () => {
	const [tarefas, setTarefas] = useState<Tarefas[]>([]);
	const [carregando_dados, setCarregando] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		axios
			.get("https://dummyjson.com/todos")
			.then((resposta) => {
				console.log(resposta);
				return resposta.data.todos;
			})
			.then((tarefas_da_api) => {
				console.log(tarefas_da_api);
				setTarefas(tarefas_da_api);
				setCarregando(false);
				setError(null);
			})
			.catch((error) => {
				console.error(error);
				setError(error.message);
				setCarregando(false);
			});
	}, []);

	if (carregando_dados) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
			</div>
		);
	}

	if (error) {
		return (
			<div className="flex justify-center items-center h-screen">
				<div className="text-red-500 text-xl">{error}</div>
			</div>
		);
	}

	return (
		<Conteiner>
      <Cabecalho />
			<Corpo>
				<div className="bg-white shadow-md rounded-lg overflow-hidden">
					<ul className="divide-y divide-gray-200">
						{tarefas.map((tarefa) => (
							<li key={tarefa.id} className="p-4 hover:bg-gray-50">
								<div className="flex items-center">
									<input
										type="checkbox"
										checked={tarefa.completed}
										readOnly
										className="h-4 w-4 text-blue-600 rounded mr-3"
									/>
									<span
										className={`${
											tarefa.completed
												? "line-through text-gray-400"
												: "text-gray-800"
										}`}
									>
										{tarefa.todo}
									</span>
								</div>
							</li>
						))}
					</ul>
				</div>
			</Corpo>
		</Conteiner>
	);
}

export default Home;