import React from "react";

import { TarefaInterface } from "@/data/interfaces";

interface TarefaCardProps {
  tarefa: TarefaInterface;
}

const TarefaCard: React.FC<TarefaCardProps> = ({tarefa}) => {
	return (
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
						tarefa.completed ? "line-through text-gray-400" : "text-gray-800"
					}`}
				>
					{tarefa.todo}
				</span>
			</div>
		</li>
	);
};

export default TarefaCard;
