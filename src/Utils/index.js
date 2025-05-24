export const getBookings = () => {
  const bookings = localStorage.getItem("booking");
  if (bookings) return JSON.parse(bookings);
  return [];
};

export const addBooking = (doctor) => {
  const bookings = getBookings();
  const isExit = bookings.find(d=> d.id === doctor.id)
  if (isExit) return console.log("phone already added");
  bookings.push(doctor);
  localStorage.setItem("booking", JSON.stringify(bookings));
};

export const removeDoctor = id =>{
    const booking = getBookings()
    const remainingBookings = booking.filter(doctor=>doctor.id !==id)
    localStorage.setItem("booking", JSON.stringify(remainingBookings));
} 