
export function sortForHealth(players){
    return players.sort((a,b) => {
        return b.health - a.health;
    });
}