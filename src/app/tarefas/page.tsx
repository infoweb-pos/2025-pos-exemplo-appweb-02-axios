"use client";

import { useState, useEffect } from "react";
import axios from "axios";

import { Cabecalho, Conteiner, Corpo } from "@/componentes";
import { TarefaInterface } from "@/data/interfaces";
import { TarefaCard } from "@/componentes/tarefa";

const TarefasListaPage = () => {
	const [tarefas, setTarefas] = useState<TarefaInterface[]>([]);
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
			<Conteiner>
				<Cabecalho />
				<Corpo>
					<div className="flex justify-center items-center h-screen">
						<div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500" />
					</div>
				</Corpo>
			</Conteiner>
		);
	}

	if (error) {
		return (
			<Conteiner>
				<Cabecalho />
				<Corpo>
					<div className="flex justify-center items-center h-screen">
						<div className="text-red-500 text-xl">{error}</div>
					</div>
				</Corpo>
			</Conteiner>
		);
	}

	return (
		<Conteiner>
			<Cabecalho />
			<Corpo>
				<div className="bg-white shadow-md rounded-lg overflow-hidden">
					<ul className="divide-y divide-gray-200">
						{tarefas.map((tarefa) => (
							<TarefaCard tarefa={tarefa} key={tarefa.id} />
						))}
					</ul>
				</div>
			</Corpo>
		</Conteiner>
	);
};

export default TarefasListaPage;
