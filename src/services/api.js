export async function getCep (cep){
  return fetch(`https://viacep.com.br/ws/${cep}/json/`);
}