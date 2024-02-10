import { CompactTable } from "@table-library/react-table-library/compact";
import { useTheme } from "@table-library/react-table-library/theme";
import { DEFAULT_OPTIONS, getTheme } from "@table-library/react-table-library/mantine";
import { useSort } from "@table-library/react-table-library/sort";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

export default function DataTable() {
  const nodes = [
    {
      id: "000001",
      selectedProject: "Project A",
      selectedSeverity: "Minor",
      selectedPriority: "Low",
      selectedAssignee: "Unassigned",
      summaryText: "Login Page Styling",
      descriptionText: "Styling issue with the login page. Need to fix the alignment.",
      status: "New",
    },
    {
      id: "000002",
      selectedProject: "Project B",
      selectedSeverity: "Major",
      selectedPriority: "Medium",
      selectedAssignee: "User 1",
      summaryText: "Bug in Dashboard",
      descriptionText: "There is a bug in the dashboard that causes data inconsistency. Need to investigate and fix.",
      status: "Work in Progress",
    },
    {
      id: "000003",
      selectedProject: "Project C",
      selectedSeverity: "Feature",
      selectedPriority: "High",
      selectedAssignee: "User 2",
      summaryText: "Add Dark Mode Feature",
      descriptionText: "Implement dark mode feature for the application as requested by users.",
      status: "Resolved",
    },
    {
      id: "000004",
      selectedProject: "Project A",
      selectedSeverity: "Crash",
      selectedPriority: "High",
      selectedAssignee: "User 3",
      summaryText: "Application Crashes on Startup",
      descriptionText: "Users report that the application crashes upon startup. Urgent fix needed.",
      status: "New",
    },
    {
      id: "000005",
      selectedProject: "Project B",
      selectedSeverity: "Styling",
      selectedPriority: "Medium",
      selectedAssignee: "Unassigned",
      summaryText: "Footer Alignment Issue",
      descriptionText: "The footer is not aligning properly. Need to adjust the styling for better alignment.",
      status: "Work in Progress",
    },
    {
      id: "000006",
      selectedProject: "Project C",
      selectedSeverity: "Feature",
      selectedPriority: "Low",
      selectedAssignee: "User 1",
      summaryText: "Implement User Profile",
      descriptionText: "Create a user profile page with customizable settings and preferences.",
      status: "Resolved",
    },
    {
      id: "000007",
      selectedProject: "Project A",
      selectedSeverity: "Major",
      selectedPriority: "High",
      selectedAssignee: "User 2",
      summaryText: "Database Connection Issue",
      descriptionText:
        "Users report intermittent issues connecting to the database. Investigate and resolve the problem.",
      status: "New",
    },
    {
      id: "000008",
      selectedProject: "Project B",
      selectedSeverity: "Styling",
      selectedPriority: "Medium",
      selectedAssignee: "User 3",
      summaryText: "Improve Landing Page Layout",
      descriptionText: "Enhance the layout and design of the landing page to improve user experience.",
      status: "Work in Progress",
    },
    {
      id: "000009",
      selectedProject: "Project C",
      selectedSeverity: "Minor",
      selectedPriority: "Low",
      selectedAssignee: "Unassigned",
      summaryText: "Update Contact Form Validation",
      descriptionText: "Update and validate the contact form to ensure accurate data submission.",
      status: "Resolved",
    },
    {
      id: "000010",
      selectedProject: "Project A",
      selectedSeverity: "Crash",
      selectedPriority: "High",
      selectedAssignee: "User 1",
      summaryText: "Application Freezing on Mobile",
      descriptionText:
        "Users experience freezing issues on the mobile version of the application. Urgent fix required.",
      status: "New",
    },
  ];

  let [data, setData] = useState({ nodes });
  const [isHide, setHide] = useState(false);

  const mantineTheme = getTheme(DEFAULT_OPTIONS);

  const theme = useTheme([
    mantineTheme,
    {
      Table: `
      --data-table-library_grid-template-columns:  9% 17% 10% 8% 8% 10% 38%;
      `,
      HeaderRow: `
        .th {
          border-right: 1px solid #a0a8ae;
        }
      `,
      BaseCell: `
        &:not(:last-of-type) {
          border-right: 1px solid #a0a8ae;
        }
      `,
    },
  ]);

  const handleUpdate = (value, id, property) => {
    setData((state) => ({
      ...state,
      nodes: state.nodes.map((node) => {
        if (node.id === id) {
          return { ...node, [property]: value };
        } else {
          return node;
        }
      }),
    }));
  };

  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  data = {
    nodes: data.nodes.filter((item) =>
      Object.values(item).some(
        (field) => field && typeof field === "string" && field.toLowerCase().includes(search.toLowerCase())
      )
    ),
  };

  data = {
    nodes: isHide ? data.nodes.filter((node) => node.status !== "Resolved") : data.nodes,
  };

  const sort = useSort(
    data,
    {
      onChange: onSortChange,
    },
    {
      sortIcon: {
        iconDefault: null,
        iconUp: <FaChevronUp />,
        iconDown: <FaChevronDown />,
      },
      sortFns: {
        PROJECT: (array) => array.sort((a, b) => a.selectedProject.localeCompare(b.selectedProject)),
        SUMMARY: (array) => array.sort((a, b) => a.summaryText.localeCompare(b.summaryText)),
        PRIORITY: (array, sortOrder) => {
          // Sort by low to high (ascending)
          if (sortOrder === "asc") {
            return array.sort((a, b) => {
              const priorityOrder = ["Low", "Medium", "High"];
              return priorityOrder.indexOf(a.selectedPriority) - priorityOrder.indexOf(b.selectedPriority);
            });
          }
          // Sort by high to low (descending)
          return array.sort((a, b) => {
            const priorityOrder = ["High", "Medium", "Low"];
            return priorityOrder.indexOf(a.selectedPriority) - priorityOrder.indexOf(b.selectedPriority);
          });
        },
        SEVERITY: (array) => array.sort((a, b) => a.selectedSeverity.localeCompare(b.selectedSeverity)),
        ASSIGNEE: (array) => array.sort((a, b) => a.selectedAssignee.localeCompare(b.selectedAssignee)),
        DESCRIPTION: (array) => array.sort((a, b) => a.descriptionText.localeCompare(b.descriptionText)),
        STATUS: (array) => array.sort((a, b) => a.status.localeCompare(b.status)),
      },
    }
  );

  function onSortChange(action, state) {
    console.log(action, state);
  }

  const COLUMNS = [
    { label: "Project", renderCell: (item) => item.selectedProject, resize: true, sort: { sortKey: "PROJECT" } },
    { label: "Summary", renderCell: (item) => item.summaryText, resize: true, sort: { sortKey: "SUMMARY" } },
    {
      label: "Status",
      renderCell: (item) => (
        <select
          type="text"
          style={{
            width: "100%",
            border: "none",
            fontSize: "1rem",
            padding: 0,
            margin: 0,
          }}
          value={item.status}
          onChange={(event) => handleUpdate(event.target.value, item.id, "status")}
        >
          <option value="New">New</option>
          <option value="Work in Progress">WIP</option>
          <option value="Resolved">Resolved</option>
        </select>
      ),
      resize: true,
      sort: { sortKey: "STATUS" },
    },
    { label: "Priority", renderCell: (item) => item.selectedPriority, resize: true, sort: { sortKey: "PRIORITY" } },
    { label: "Severity", renderCell: (item) => item.selectedSeverity, resize: true, sort: { sortKey: "SEVERITY" } },
    { label: "Assignee", renderCell: (item) => item.selectedAssignee, resize: true, sort: { sortKey: "ASSIGNEE" } },
    { label: "Description", renderCell: (item) => item.descriptionText, sort: { sortKey: "DESCRIPTION" } },
  ];

  return (
    <>
      <div className="text-xs">
        <div className="flex w-full bg-slate-300/75">
          <div className="">
            <label htmlFor="search">
              <input
                id="search"
                className="mx-3 my-2 rounded "
                type="text"
                value={search}
                onChange={handleSearch}
                placeholder="Search All Fields"
              />
            </label>
          </div>
          <div className="py-5">
            <label htmlFor="complete">
              Hide Resolved:
              <input
                className="ml-1"
                id="complete"
                type="checkbox"
                checked={isHide}
                onChange={() => setHide(!isHide)}
              />
            </label>
          </div>
        </div>
        <CompactTable
          key={data.nodes.id}
          columns={COLUMNS}
          data={data}
          sort={sort}
          theme={theme}
          layout={{ custom: true }}
        />
      </div>
    </>
  );
}
