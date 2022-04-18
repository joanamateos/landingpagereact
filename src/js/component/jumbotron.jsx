import React from "react";

//el html del jumbotron
export const Jumbotron = () => {
	return (
		<div className="jumbotron">
			<h1 className="display-4">
				Bienvenid@ a mi primera landing con React
			</h1>
			<p classname="lead">
				Esta es mi primera landing-page construida con React. Poco a
				poco iré introduciendo mejoras a nivel de diseño. Pero lo
				primero de todo es crear una landing funcional. ¡Gracia por tu
				visita!
			</p>

			<p className="lead">
				<a className="btn btn-primary btn-lg" href="#" role="button">
					Un botón de prueba
				</a>
			</p>
		</div>
	);
};
