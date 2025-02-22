import AnalyticsCard from "./common/analytics-card";

const WorkspaceAnalytics = () => {
  const workspaceList = [
    {
      id: "total-Stories",
      title: "Total Stories",
      value: 20,
    },
    {
      id: "overdue-Stories",
      title: "Overdue Stories",
      value: 0,
    },
    {
      id: "completed-Stories",
      title: "Completed Stories",
      value: 4,
    },
  ];

  return (
    <div className="grid gap-4 md:gap-5 lg:grid-cols-2 xl:grid-cols-3">
      {workspaceList?.map((v) => (
        <AnalyticsCard
          key={v.id}
          isLoading={false}
          title={v.title}
          value={v.value}
        />
      ))}
    </div>
  );
};

export default WorkspaceAnalytics;
