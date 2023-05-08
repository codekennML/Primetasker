import DateRender from "../../tables/DateRenderer";
import ImageRenderer from "../../tables/imageRenderer";

export const userTableHeaders = [
  {
    Header: "Avatar",
    accessor: "avatar",
    Cell: ({ row }) => (
      <ImageRenderer src={row.original.avatar || row.original.Avatar} />
    ),
  },

  {
    Header: "UserID",
    accessor: "id",
  },

  {
    Header: "Name",
    accessor: (user) => `${user.firstname} ${user.lastname}`,
  },
  // {
  //   Header: "Last Name",
  //   accessor: "lastname",
  // },
  {
    Header: "Gender",
    accessor: `gender`,
  },
  {
    Header: "Address",
    accessor: `homeaddress`,
    minWidth: 400,
  },
  {
    Header: "Phone Number",
    accessor: "phone",
  },
  {
    Header: "Registered",
    accessor: "createdAt" || "registered",
    Cell: ({ row }) => <DateRender date={row.values.createdAt} />,
  },

  {
    Header: "BirthDate",
    accessor: "birthDate",
    Cell: ({ row }) => <DateRender date={row.values.birthDate} />,
  },

  {
    Header: "Email Address",
    accessor: "email",
  },
  {
    Header: "Marital Status",
    accessor: "maritalstatus",
  },
  {
    Header: "Active",
    accessor: "active",
    Cell: ({ row }) => {
      return row.values.active ? (
        <span className="bg-green-100 text-brand-light px-3 py-1 rounded text-xs ">
          Active
        </span>
      ) : (
        <span className="bg-red-50 text-red-700 px-3 py-1 rounded text-xs">
          Inactive
        </span>
      );
    },
  },
  {
    Header: "Verified",
    accessor: "verified",
    Cell: ({ row }) => {
      return row.values.verified ? (
        <span className="bg-green-50 text-green-500 px-3 py-1 rounded text-xs ">
          Verified
        </span>
      ) : (
        <span className="bg-indigo-50 text-indigo-600 px-3 py-1 rounded text-xs">
          Unverified
        </span>
      );
    },
  },
];
