import React from 'react';

class App extends React.Component {

  ponerFilas = () => [
		<tr>
			<td>
				Rodolfo
			</td>
			<td>
				Rodolfo@platzi.com
			</td>
			<td>
				Rodolfo.com
			</td>
		</tr>,
		<tr>
			<td>
				Rodolfo
			</td>
			<td>
				Rodolfo@platzi.com
			</td>
			<td>
				Rodolfo.com
			</td>
		</tr>
  ];
  render() {
    return(
      <div className="margen">
        <table className="tabla">
          <thead>
            <tr>
              <th>
                Nombre
              </th>
              <th>
                Correo
              </th>
              <th>
                Enlace
              </th>
            </tr>
          </thead>
          <tbody>
            { this.ponerFilas() }
          </tbody>
        </table>
      </div>
    );
  };

}

export default App;
