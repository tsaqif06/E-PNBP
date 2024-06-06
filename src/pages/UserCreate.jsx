import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Col,
  FormControl,
  Row,
} from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import { Label } from "reactstrap";
import ReactSelect from "react-select";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { useGetListUpt } from "../hooks/useUpt";
const validation = () => {
  return Yup.object().shape({
    name: Yup.string().required("Harap isi nama Anda"),
    email: Yup.string().required("Harap isi email Anda"),
    password: Yup.string().required("Harap isi password Anda"),
    role: Yup.string().required("Harap isi role Anda"),
  });
};
const UserCreate = () => {
  const navigate = useNavigate();
  const { data: response } = useGetListUpt();
  const { data: listData = [] } = response ?? {};
  const uptOptions = listData?.map((upt) => ({
    label: upt?.nama,
    value: upt?.id,
  }));
  const { register, control } = useForm({
    resolver: yupResolver(validation()),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "",
    },
  });
  return (
    <>
      <SEO title="Buat User" />
      <div className="d-md-flex align-items-center justify-content-between mb-1 mt-1">
        <div>
          <ol className="breadcrumb fs-sm mb-0">
            <li className="breadcrumb-item">
              <Link href="#">Master Data</Link>
            </li>
            <li className="breadcrumb-item" aria-current="page">
              Manajemen User
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Buat User
            </li>
          </ol>
        </div>
        <div className="d-flex align-items-center gap-2 mt-1 mt-md-0"></div>
      </div>
      <form>
        <Card className="card-one">
          <CardHeader>
            <CardTitle>Buat User</CardTitle>
          </CardHeader>
          <CardBody>
            <Row>
              <Col sm={12} md={6}>
                <div className="mb-3">
                  <Label htmlFor="name">Nama </Label>
                  <FormControl
                    {...register("name")}
                    className="form-control-lg"
                    type="text"
                    id="name"
                    placeholder="your name here..."
                  />
                </div>
                <div className="mb-3">
                  <Label htmlFor="exampleFormControlInput1">Email </Label>
                  <FormControl
                    {...register("email")}
                    className="form-control-lg"
                    type="email"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                  />
                </div>
              </Col>
              <Col sm={12} md={6}>
                <div className="">
                  <Label htmlFor="role">Role</Label>
                  <Controller
                    name="role"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <ReactSelect
                        // className="form-select"
                        styles={{
                          input: (base) => ({
                            ...base,
                            padding: ".53rem 0px",
                          }),
                        }}
                        options={[
                          { label: "ADMIN PUSAT", value: "ADMIN_PUSAT" },
                          { label: "ADMIN UPT", value: "ADMIN_UPT" },
                          { label: "BANDAHARA", value: "BANDAHARA" },
                          {
                            label: "BANDAHARA PEMBANTU",
                            value: "BANDAHARA_PEMBANTU",
                          },
                        ]}
                        onChange={(e) => onChange(e)}
                      />
                    )}
                  />
                  {/* <ReactDatePicker
                          selected={selectedDate}
                          peekNextMonth={true}
                          showMonthDropdown={true}
                          showYearDropdown={true}
                          dropdownMode="select"
                          className="form-control"
                          wrapperClassName="w-100"
                          calendarClassName="shadow-lg"
                          dateFormat={"dd-MMMM-yyyy"}
                          showPopperArrow={false}
                          onChange={(e) => {
                            onChange(dayjs(e).format("YYYY-MM-DD"));
                            setSelectedDate(e);
                          }}
                        /> */}
                </div>
                <div className="mt-3">
                  <Label htmlFor="address">Lembaga</Label>
                  <ReactSelect
                    styles={{
                      input: (base) => ({
                        ...base,
                        padding: ".53rem 0px",
                      }),
                    }}
                    // className="form-select"
                    options={uptOptions}
                  />
                </div>
              </Col>
            </Row>
          </CardBody>
          <Row className="d-flex justify-content-end mx-2 mb-4">
            <Col
              className="d-flex justify-content-end"
              style={{ columnGap: "4px" }}
            >
              <Button className="btn btn-primary" onClick={() => navigate(-1)}>
                Kembali
              </Button>
              <Button className="btn btn-primary">Simpan</Button>
            </Col>
          </Row>
        </Card>
      </form>
    </>
  );
};
export default UserCreate;
