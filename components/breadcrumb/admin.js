import Breadcrumb from "react-bootstrap/Breadcrumb";

function AdminBreadcrumb({ items }) {
  return (
    <Breadcrumb>
      {/* <Breadcrumb.Item href="/admin/">Home</Breadcrumb.Item> */}
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
