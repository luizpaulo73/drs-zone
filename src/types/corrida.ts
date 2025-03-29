export interface Corrida {
    season: string;
    round: string;
    raceName: string;
    Circuit: {
      circuitId: string;
      url: string;
      name: string;
      Location: {
        lat: number;
        long: number;
        locality: string;
        country: string;
      };
    };
    date: string;
    time: string;
    FirstPractice?: string;
    SecondPractice?: string;
    ThirdPractice?: string;
    Qualifying?: string;
    dateTime: Date;
  }
  
  export interface TempoRestante {
    dias: number;
    horas: number;
    minutos: number;
    segundos: number;
  }
  