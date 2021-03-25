// BASE URL

const baseUrl = 'https://api.rawg.io/api/';

//  GETTING CURRENT DATE

const currentYear = new Date().getFullYear();
const currentMonth = String(new Date().getMonth() + 1).padStart(2, '0');
const currentDay = String(new Date().getDate()).padStart(2, '0');
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games

const popularGames = `games?dates=${lastYear},${currentDate}&ordering=-rating&page-size=10`;

export const popularGamesURL = () => `${baseUrl}${popularGames}`;
