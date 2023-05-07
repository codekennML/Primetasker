import DateRender from "../../tables/DateRenderer";
import ImageRenderer from "../../tables/imageRenderer";

export const taskTableHeaders = [
  {
    Header: "Task ID ",
    accessor: "id",
  },

  {
    Header: "Task Creator",
    accessor: (tasks) =>
      `${tasks.creator_details.firstname} ${tasks.creator_details.lastname}`,
  },

  {
    Header: "E-mail",
    accessor: "creator_details.email",
  },

  {
    Header: "Task title",
    accessor: `title`,
  },

  {
    Header: "Task Budget",
    accessor: `budget`,
    Cell: ({ row }) => `₦ ${row.values.budget}`,
  },
  {
    Header: "Task Type",
    accessor: `taskType`,
  },

  {
    Header: "Task Address",
    accessor: `creator_details.homeaddress`,
    minWidth: 400,
  },

  {
    Header: "Task State",
    accessor: `location`,
    minWidth: 400,
  },

  {
    Header: "Creation Time",
    accessor: "createdAt",
    Cell: ({ row }) => <DateRender date={row.values.createdAt} />,
  },

  {
    Header: "Task Time",
    accessor: "taskEarliestDone",
    Cell: ({ row }) => <DateRender date={row.values.taskEarliestDone} />,
  },
  {
    Header: "Task Deadline",
    accessor: "taskDeadline",
    Cell: ({ row }) => <DateRender date={row.values.taskDeadline} />,
  },

  {
    Header: "Task Status",
    accessor: "status",
    Cell: ({ row }) => {
      return row.values.status === "Active" ? (
        <span className="bg-green-100 text-brand-light px-3 py-1 rounded-full text-xs ">
          Active
        </span>
      ) : (
        <span className="bg-red-200 text-red-700 px-3 py-1 rounded-full text-xs">
          Inactive
        </span>
      );
    },
  },
];
