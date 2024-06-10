export default defineEventHandler(async event => {
    const response = await 
$fetch
('https://pokeapi.co/api/v2/pokemon/scizor')

const idealResponse = {
    id:response.id,
    name: response.name,
    sprite: response.sprites.front_default
}
    
    return idealResponse



})