export const taxesRules = [
  {
    regimen: "Regimen de Dividendos",
    declaracion: ["Anual"],
  },
  {
    regimen: "Regimen de Introducción Fiscal (RIF)",
    declaracion: ["Bimestral"],
  },
  {
    regimen: "Régimen Simplificado de Confianza (RESICO)",
    declaracion: ["Mensual", "Anual"],
  },
  {
    regimen: "Sueldos y salarios e ingresos asimilados a salarios",
    declaracion: ["Anual"],
  },
  {
    regimen: "Régimen de Actividades Empresariales y Profesionales",
    declaracion: ["Mensual", "Anual"],
  },
  {
    regimen: "Enajenación de bienes",
    declaracion: ["Anual"],
  },
  {
    regimen:
      "Régimen de Actividades Empresariales con ingresos a través de Plataformas Tecnológicas",
    declaracion: ["Mensual", "Anual"],
  },
  {
    regimen: "Régimen de Arrendamiento",
    declaracion: ["Mensual", "Anual"],
  },
  {
    regimen: "Intereses",
    declaracion: ["Anual"],
  },
  {
    regimen: "Obtención de premios",
    declaracion: ["Anual"],
  },
  {
    regimen: "Dividendos",
    declaracion: ["Anual"],
  },
  {
    regimen: "Demas Ingresos",
    declaracion: ["Anual"],
  },
];

export function daysToAnualTax(today: Date, typeVariant?: boolean): string {
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  const thisYearApril30 = new Date(currentYear, 3, 30);

  if (currentMonth > 3 || (currentMonth === 3 && currentDay > 30)) {
    thisYearApril30.setFullYear(currentYear + 1);
  }

  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const differenceInMilliseconds = thisYearApril30.getTime() - today.getTime();

  const daysLeft = Math.ceil(differenceInMilliseconds / millisecondsInADay);

  let result: string;
  if (daysLeft > 30) {
    const monthsLeft = Math.floor(daysLeft / 30);
    result = `${monthsLeft} meses`;
  } else {
    result = `${daysLeft} días`;
  }

  if (typeVariant) {
    result += ` (Declaración anual)`;
  } else {
    if (currentMonth >= 0 && currentMonth <= 3) {
      result += ` (Declaración ${currentYear - 1})`;
    } else {
      result += ` (Declaración ${currentYear})`;
    }
  }

  return result;
}

export function daysUntilNextMonth17(today: Date, typeVariant?: boolean): string {
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentDay = today.getDate();

  const nextMonth = currentMonth % 12;
  const nextYear = nextMonth === 0 ? currentYear + 1 : currentYear;

  const monthNames = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const nextMonth17 = new Date(nextYear, nextMonth, 17);
  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const differenceInMilliseconds = nextMonth17.getTime() - today.getTime();
  const daysLeft = Math.ceil(differenceInMilliseconds / millisecondsInADay);
  const previousMonth = (currentMonth - 1 + 12) % 12;

  if(typeVariant){
    return `${daysLeft} dias (Declaración menusal)`;
  }

  if (currentDay > 17) {
    return `${daysLeft} dias (Declaración ${monthNames[currentMonth]})`;
  } else {
    return `${daysLeft} dias (Declaración ${monthNames[previousMonth]})`;
  }
}

export function daysUntilRIFDeclarationDeadline(
  today: Date,
  typeVariant?: boolean
): string {
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();

  const deadlines = [
    {
      months: [0, 1],
      deadline: new Date(currentYear, 2, 17),
      range: "Enero - Febrero",
    },
    {
      months: [2, 3],
      deadline: new Date(currentYear, 4, 17),
      range: "Marzo - Abril",
    },
    {
      months: [4, 5],
      deadline: new Date(currentYear, 6, 17),
      range: "Mayo - Junio",
    },
    {
      months: [6, 7],
      deadline: new Date(currentYear, 8, 17),
      range: "Julio - Agosto",
    },
    {
      months: [8, 9],
      deadline: new Date(currentYear, 10, 17),
      range: "Septiembre - Octubre",
    },
    {
      months: [10, 11],
      deadline: new Date(currentYear + 1, 0, 17),
      range: "Noviembre - Diciembre",
    },
  ];

  for (const deadline of deadlines) {
    if (deadline.months.includes(currentMonth)) {
      const differenceInMilliseconds =
        deadline.deadline.getTime() - today.getTime();
      const millisecondsInADay = 1000 * 60 * 60 * 24;
      const daysLeft = Math.ceil(differenceInMilliseconds / millisecondsInADay);

      if (typeVariant) {
        return `${daysLeft} días (Declaración bimestral)`;
      }
      return `${daysLeft} días (Declaración ${deadline.range})`;
    }
  }

  return "Mes no válido";
}

export function closestReportDayForMultipleReports(today: Date) {

  //month
  const currentMonth = today.getMonth();
  const currentYear = today.getFullYear();
  const currentDay = today.getDate();

  const nextMonth = currentMonth % 12;
  const nextYear = nextMonth === 0 ? currentYear + 1 : currentYear;

  const nextMonth17 = new Date(nextYear, nextMonth, 17);
  const millisecondsInADay = 1000 * 60 * 60 * 24;
  const differenceInMilliseconds = nextMonth17.getTime() - today.getTime();
  const daysLeftMonthly = Math.ceil(
    differenceInMilliseconds / millisecondsInADay
  );

  //years
  let nextApril30 = new Date(currentYear, 3, 30);

  if (currentMonth > 3 || (currentMonth === 3 && currentDay > 30)) {
    nextApril30 = new Date(currentYear + 1, 3, 30);
  }

  const differenceInMillisecondsYear = nextApril30.getTime() - today.getTime();
  const millisecondsInADayYear = 1000 * 60 * 60 * 24;

  const daysLeftAnual = Math.ceil(
    differenceInMillisecondsYear / millisecondsInADayYear
  );

  if(daysLeftAnual > daysLeftMonthly){
    return daysUntilNextMonth17(today, true);
  }

  return daysToAnualTax(today)
}
