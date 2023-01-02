import Breadcrumb from "react-bootstrap/Breadcrumb";

function AdminBreadcrumb({ items }) {
  console.log(items, "items");
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/admin/">Admin</Breadcrumb.Item>
      {Object.keys(items).map((k) => {
        return (
          <Breadcrumb.Item href={k} key={k}>
            {items[k]}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}

export default AdminBreadcrumb;
