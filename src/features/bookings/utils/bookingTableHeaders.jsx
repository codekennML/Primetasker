import DateRender from "../../tables/DateRenderer";
import ImageRenderer from "../../tables/imageRenderer";
import OptionsRenderer from "../../tables/optionsRenderer";

export const bookingTableHeaders = [
  {
    Header: "Booking Status",
    accessor: "status",
    Cell: ({ row }) => <OptionsRenderer value={row.values.status} />,
  },
  {
    Header: "Booking ID ",
    accessor: "id",
  },
  {
    Header: "Booking Title",
    accessor: "task_info.title",
  },

  {
    Header: "Booking Price",
    accessor: "booking_price",
    Cell: ({ row }) => `₦ ${row.values.booking_price}`,
  },
  {
    Header: "Customer Name",
    accessor: (booking) =>
      `${booking.task_creator.firstname} ${booking.task_creator.lastname}`,
  },

  {
    Header: "Customer E-mail",
    accessor: "task_creator.email",
  },
  {
    Header: "Customer Phone",
    accessor: "task_creator.phone",
  },

  {
    Header: "Tasker Name",
    accessor: (booking) =>
      `${booking.tasker_details.firstname} ${booking.tasker_details?.lastname}`,
  },
  {
    Header: "Tasker E-mail",
    accessor: "tasker_details.email",
  },
  {
    Header: "Tasker Phone",
    accessor: "tasker_details.phone",
  },

  {
    Header: "Task Type",
    accessor: `task_info.taskType`,
  },

  {
    Header: "Booking Address",
    accessor: `task_creator.homeaddress`,
  },

  {
    Header: "Supervisor",
    accessor: (booking) =>
      `${booking.supervisor.firstname} ${booking.supervisor?.lastname}`,
  },
  {
    Header: "Task State",
    accessor: `task_creator.taskState`,
    minWidth: 400,
  },

  {
    Header: "Created At",
    accessor: "createdAt",
    Cell: ({ row }) => <DateRender date={row.values.createdAt} />,
  },

  {
    Header: "Booking Begins",
    accessor: "task_info.taskEarliestDone",
    Cell: ({ row }) => (
      <DateRender date={row.original.task_info.taskEarliestDone} />
    ),
  },
  {
    Header: "Booking Ends",
    accessor: "task_info.taskDeadline",
    Cell: ({ row }) => (
      <DateRender date={row.original.task_info.taskDeadline} />
    ),
  },
];
