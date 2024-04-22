export interface Game {
    id: number;
    season: number;
    gameType: number;
    gameDate: Date;
    venue: any;
    startTimeUTC: Date;
    easternUTCOffset: string;
    venueUTCOffset: string;
    tvBroadcasts: TvBroadcast[];
    gameState: string;
    gameScheduleState: string;
    awayTeam: Team;
    homeTeam: Team;
    seriesStatus: SeriesStatus;
    gameCenterLink: string;
    seriesUrl: string;
    threeMinRecap: string;
    threeMinRecapFr: string;
    clock: Clock;
    neutralSite: boolean;
    venueTimezone: string;
    period: number;
    periodDescriptor: PeriodDescriptor;
    gameOutcome: {
        lastPeriodType: PeriodType;
    };
    goals: Goal[];
}

export interface Team {
    id: number;
    name: any;
    abbrev: string;
    score: number;
    sog: number;
    logo: string;
    record: string;
}

interface TvBroadcast {
    id: number;
    market: string;
    countryCode: string;
    network: string;
    sequenceNumber: number;
}

interface Goal {
    period: number;
    periodDescriptor: PeriodDescriptor;
    timeInPeriod: string;
    playerId: number;
    name: any;
    firstName: any;
    lastName: any;
    goalModifier: string;
    assists: Assist[];
    mugshot: string;
    teamAbbrev: string;
    goalsToDate: number;
    awayScore: number;
    homeScore: number;
    strength: string;
    highlightClip: number;
    highlightClipFr: number;
}

interface Assist {
    playerId: number;
    name: any;
    assistsToDate: number;
}

interface PeriodDescriptor {
    number: number;
    periodType: PeriodType;
}

enum PeriodType {
    Reg = "REG",
}

interface SeriesStatus {
    round: number;
    seriesAbbrev: string;
    seriesLetter: string;
    neededToWin: number;
    topSeedTeamAbbrev: string;
    topSeedWins: number;
    bottomSeedTeamAbbrev: string;
    bottomSeedWins: number;
    gameNumberOfSeries: number;
}

interface Clock {
    timeRemaining: string;
    secondsRemaining: number;
    running: boolean;
    inIntermission: boolean;
}