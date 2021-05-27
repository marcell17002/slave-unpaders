export const getTime = date => {
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${hour}:${minutes} ${hour >= 12 ? 'PM' : 'AM'}`;
};

export const getDateName = date => {
  const days = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
  const months = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];

  const dateParsed = new Date(date);
  const dayName = days[dateParsed.getDay()];
  const monthName = months[dateParsed.getMonth()];

  const timeParse = date.split('T');
  const timeParsed = timeParse[0];
  const time = dateParsed.getHours();
  const minutes = dateParsed.getMinutes();

  const year = timeParsed.split('-')[0];
  const newDate = timeParsed.split('-')[2];
  return `${dayName}, ${newDate} ${monthName} ${year} ${time}:${minutes}`;
};
