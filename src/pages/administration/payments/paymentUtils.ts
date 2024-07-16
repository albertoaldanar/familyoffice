import moment from 'moment';

export function calculateTotalWithPercentage(value: string, percentage: string): string {
  const numericValue = parseFloat(value.replace(/,/g, ""));
  const percent = parseFloat(percentage.replace("%", "")) / 100;
  const total = numericValue + numericValue * percent;

  const formattedTotal = total.toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedTotal;
}

export function calculateDifference(value1: string, value2: string): string {
  const numericValue1 = parseFloat(value1.replace(/,/g, ""));
  const numericValue2 = parseFloat(value2.replace(/,/g, ""));

  const difference = numericValue1 - numericValue2;

  const formattedDifference = difference.toLocaleString("en", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedDifference;
}

export function getMemberPercentage(value1: string, value2: string): number {
  const numericValue1 = parseFloat(value1.replace(/,/g, ""));
  const numericValue2 = parseFloat(value2.replace(/,/g, ""));

  const percentage = (numericValue1 / numericValue2) * 100;

  return percentage;
}

export function formateDateForUI(paymentDate: string): any {
  const formatedDate = paymentDate.split("/").reverse().join("-");
  const textDate = new Date(formatedDate).toString();
  return textDate;
}

function formatDate(targetDate: string, unity: moment.unitOfTime.Diff): string {
  const today = moment();
  const target = moment(targetDate, 'DD/MM/YYYY');
  
  if (!target.isValid()) {
      return 'Fecha no válida';
  }

  const difference = target.diff(today, 'days', true);

  if (difference < 0) {
      return 'Vencido';
  }

  return Math.ceil(difference).toString() + ' dias';
}


export function isDateDefeated(date: string): boolean {
  const dateToValidate = moment(date, "DD/MM/YYYY");
  const currentDate = moment();

  if (dateToValidate.isBefore(currentDate, "day")) {
    return true;
  } 
  
  return false;
}

export function nextPaymentFormatDate(payments: any[]): string {
  let paymentElement = null;
  let status = null;

  payments.map((payment) => {
    const isElementNotPayed =  payment.fechaDePago.length === 0 || payment.comprobantePago.length === 0;

    if (isElementNotPayed) {
      paymentElement = payment;
      status = "notPayed";
      return;
    }
  });

  if (paymentElement === null) {
    paymentElement = payments[payments.length - 1];
    status = "payed";
  }

  if (status === "payed") {
    if(paymentElement.proximoPago){
      return isDateDefeated(paymentElement.proximoPago) ? 'Vencido' : formatDate(paymentElement.proximoPago, 'days');
    } 
      return '--'
  } else {
    return isDateDefeated(paymentElement.limitePago) ? 'Vencido' : formatDate(paymentElement.limitePago, 'days');
  }
}

export const formatRealstateData = (data) => {
  return data.map(item => ({
    label: item.nombre,
    value: item.id,
  }));
};

export const formatFamilyMembers = (family) => {
  return family.map(member => ({
    label: member.name,
    value: member.id,
  }));
};

export const formatRealstateDataPropertyTax = (data, propertyTaxData) => {
  const ids = new Set(data.map(item => item.id));

  return propertyTaxData
    .filter(item => !ids.has(item.linkedItemId))
    .map(item => ({
      label: item.nombre,
      value: item.id.toString(),
    }));
};

export const formatVehicleData = (data) => {
  return data.map(item => ({
    label: `${item.brand} - ${item.model}`,
    value: item.id.toString(),
  }));
};