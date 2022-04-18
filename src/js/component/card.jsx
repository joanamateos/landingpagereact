import React from "react";

//el html de la franja de cartas
export const Card = () => {
	return (
		<div className="d-flex justify-content-center">
			<Post
				img="https://www.state.gov/wp-content/uploads/2019/04/Japan-2107x1406.jpg"
				titulo="Japón"
				descripcion="Japón es un país muy bonito que me gustaría visitar muy pronto. Ahora está jodido"
			/>

			<br></br>
			<Post
				img="https://dam.ngenespanol.com/wp-content/uploads/2021/05/cuanto-cuesta-viajar-a-nueva-york.jpg"
				titulo="New York"
				descripcion="New York también me llama... pero me gusta más Japón. La cosa es que será un viaje a futuro"
			/>
			<br></br>
			<Post
				img="https://media.istockphoto.com/photos/skyline-of-santiago-de-chile-picture-id913781186?k=20&m=913781186&s=612x612&w=0&h=3nJv-w605Pm3QXFx39LHijPay2Hi8d70RfqLeHty_hQ="
				titulo="Chile"
				descripcion="Es un pais que me llama la atención y en general toda America Latina. Espero verlo"
			/>

			<br></br>
			<Post
				img="https://a.cdn-hotels.com/gdcs/production25/d949/229c5ecf-b3f5-47c2-a5e2-265c446d4310.jpg?impolicy=fcrop&w=800&h=533&q=medium"
				titulo="Israel"
				descripcion="Me entraron las ganas de verlo, viendo la película Guerra Mundial Z. Lo introducen bien"
			/>
		</div>
	);
};

function Post(props) {
	return (
		<div className="container">
			<div className="card" style={{ width: "18rem" }} margin="0">
				<img class="card-img-top" src={props.img} />
				<div class="card-body">
					<h5>{props.titulo}</h5>
					<p>{props.descripcion}</p>
					<a href="#" class="btn btn-primary">
						Haz click aquí
					</a>
				</div>
			</div>
		</div>
	);
}
