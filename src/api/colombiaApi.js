const BASE = "https://api-colombia.com/api/v1/"

//API PARA LAS CIUDADES

export const ciudadesPorDepartamento = async (departamentoId) => {
  try {
    const response = await fetch(`${BASE}/Department/${departamentoId}/cities`)
    const data = await response.json()
    return data
  } catch (err) {
    console.error(err);
  }
}