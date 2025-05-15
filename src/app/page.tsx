import { Cabecalho, Conteiner, Corpo } from "@/componentes";
import Link from "next/link";

const Home = () => {
	return (
		<Conteiner>
			<Cabecalho />
			<Corpo>
				<section className="max-w-3xl mx-auto text-center">
					<h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-4">
						Bem-vindo ao Nosso Aplicativo
					</h2>
					<div className="prose prose-lg text-gray-700">
						<p>
							Esta é um aplicativo web exemplo usado em sala de aula para
							mostrar conceitos e técnicas de desenvolvimento com react, next,
							typescript, tailwind, axios, entre outras tecnologias.
						</p>
						<div className="prose prose-lg text-gray-700 mt-4">
							<Link
								className="inline-block px-4 py-2 bg-gray-400 text-white font-medium rounded-lg shadow-md transition-all duration-200 hover:bg-gray-600 hover:shadow-lg hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
								href="/tarefas"
							>
								Lista de tarefas
							</Link>
						</div>
					</div>
				</section>
			</Corpo>
		</Conteiner>
	);
};

export default Home;
