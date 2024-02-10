import { useState } from "react";

// Colours are terrible - need help with colours

const dummyData = {
  // need to replace with DB api
  projects: ["Project A", "Project B", "Project C"],

  // These stay as manual
  severities: ["Minor", "Major", "Feature", "Crash", "Styling"],
  priorities: ["Low", "Medium", "High"],

  // need to replace with DB api
  assignee: ["Unassigned", "User 1", "User 2", "User 3"],
};

export default function CreateTicket() {
  const [formValues, setFormValues] = useState({
    selectedProject: dummyData.projects[0],
    selectedSeverity: dummyData.severities[0],
    selectedPriority: dummyData.priorities[0],
    selectedAssignee: dummyData.assignee[0],
    summaryText: "",
    descriptionText: "",
  });

  const handleValuesChange = (field, value) => {
    setFormValues({
      ...formValues,
      [field]: value,
    });
    console.log(JSON.stringify(formValues));
  };

  const renderDropdown = (category, selectedValue, handleChange) => (
    <div className="flex items-center justify-between border-b py-2 px-4 bg-slate-100">
      <div className="">{category}</div>
      <div className="">
        <select value={selectedValue} onChange={handleChange} className="border rounded w-40">
          {dummyData[category.toLowerCase()].map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );

  return (
    <div className="m-4 border-2 border-slate-400 flex flex-col">
      <div className="h-9 px-2 border-2 text-white bg-violet-500/75 text-lg font-semibold">Create a ticket</div>
      <div className="flex-1 overflow-y-auto flex flex-col">
        {renderDropdown("Projects", formValues.selectedProject, (e) =>
          handleValuesChange("selectedProject", e.target.value)
        )}
        {renderDropdown("Severities", formValues.selectedSeverity, (e) =>
          handleValuesChange("selectedSeverity", e.target.value)
        )}
        {renderDropdown("Priorities", formValues.selectedPriority, (e) =>
          handleValuesChange("selectedPriority", e.target.value)
        )}
        {renderDropdown("Assignee", formValues.selectedAssignee, (e) =>
          handleValuesChange("selectedAssignee", e.target.value)
        )}
      </div>
      <div className="flex-1 overflow-y-auto flex flex-col">
        <div className="flex items-center justify-between border-b py-4 px-4 bg-slate-100">
          <div className="mr-10">Summary/Title</div>
          <div className="flex-1">
            <input
              type="text"
              placeholder=""
              onChange={(e) => handleValuesChange("summaryText", e.target.value)}
              className=" border px-2 py-1 w-full rounded"
            />
          </div>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto flex flex-col">
        <div className="flex justify-between border-b py-4 px-4 bg-slate-100">
          <div className="mr-16">Description</div>
          <div className="flex-1">
            <textarea
              placeholder=""
              onChange={(e) => handleValuesChange("descriptionText", e.target.value)}
              className="border px-2 py-1 h-96 w-full rounded"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center py-2 px-4">
        <div className="w-48 ml-auto ">
          <button className="w-full bg-violet-500/75  text-white py-2 px-4 rounded border-slate-500 border-2">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
