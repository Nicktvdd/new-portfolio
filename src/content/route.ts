// The homepage "route so far": Nick's path from music venues to founding Tiny Tarrasque. Keep it short and true.
export type RouteStop = {
  place: string;
  year: string;
  title: string;
  desc: string;
  current?: boolean;
};

export const route: RouteStop[] = [
  {
    place: "Kampen",
    year: "2008",
    title: "Music venues",
    desc: "Marketing and booking bands at Ukien and Nirvana. Singer in a punk band, later a metal band.",
  },
  {
    place: "Nijmegen",
    year: "2012",
    title: "Sport science",
    desc: "BSc at HAN. Health still runs my day: training, good food, meditation.",
  },
  {
    place: "Lapland",
    year: "2016",
    title: "Wilderness guide",
    desc: "Snowboard instructor, then guiding snowmobile tours in Arctic Finland and Sweden.",
  },
  {
    place: "Helsinki",
    year: "2022",
    title: "Learning to code",
    desc: "C and C++ at Hive Helsinki, while teaching young kids Dutch on the side.",
  },
  {
    place: "Soil Scout",
    year: "2024",
    title: "Lead Full Stack Engineer",
    desc: "Owned the software product, hired and mentored, kept the sensor data flowing.",
  },
  {
    place: "You are here",
    year: "2026",
    title: "Tiny Tarrasque",
    desc: "Founding an app for people who play tabletop role-playing games together.",
    current: true,
  },
];
