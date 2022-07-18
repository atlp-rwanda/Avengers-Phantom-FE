import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import {
  Box,
  Typography,
  Button,
  Card,
} from "@mui/material";


const SkeletonElement =()=> (
  <>
  <Card sx={{ marginBottom: 3 }}>
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        lg: "200px 200px 200px 200px",
        xs: "100%",
        md: "400px 400px",
      },
    }}
  >
    <Box
      sx={{
        width: { lg: 200, xs: 1 },
        height: { lg: 130, xs: 200 },
      }}
    />
    <Box
      component="div"
      sx={{ display: "block", textAlign: "center", p: 2 }}
    >
      <Typography
        component="label"
        sx={{
          color: "#675B5B",
          textTransform: "uppercase",
          textAlign: "center",
          fontWeight: 700,
          fontSize: { xs: 12, lg: 15 },
        }}
      >
      </Typography>
      <Typography
        component="p"
        sx={{ fontWeight: 700, fontSize: { lg: 13, xs: 10 } }}
      >
        <Skeleton />
      </Typography>
      <Typography
        component="label"
        sx={{
          textTransform: "uppercase",
          color: "#675B5B",
          fontSize: { lg: 12, xs: 9 },
        }}
      >
        <Skeleton />
      </Typography>
    </Box>
    <Box
      component="div"
      sx={{ display: "block", textAlign: "center", p: 2 }}
    >
      <Typography
        component="label"
        sx={{
          color: "#675B5B",
          textTransform: "uppercase",
          textAlign: "center",
          fontWeight: 700,
          fontSize: { xs: 12, lg: 15 },
        }}
      >
      </Typography>
      <Typography
        component="p"
        sx={{ fontWeight: 700, fontSize: { lg: 13, xs: 10 } }}
      >
        <Skeleton />
      </Typography>
      <Typography
        component="label"
        sx={{
          textTransform: "uppercase",
          color: "#675B5B",
          fontSize: { lg: 12, xs: 9 },
        }}
      >
      </Typography>
    </Box>
    <Box
      component="div"
      sx={{ display: "block", textAlign: "center", p: 2 }}
    >
      <Typography
        component="label"
        sx={{
          color: "#675B5B",
          textTransform: "uppercase",
          textAlign: "center",
          fontWeight: 700,
          fontSize: { xs: 12, lg: 15 },
        }}
      >
        <Skeleton />
      </Typography>
      <Typography
        component="p"
        sx={{ fontWeight: 700, fontSize: { lg: 13, xs: 10 } }}
      >
        <Skeleton />
      </Typography>
    </Box>
  </Box>
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        lg: "150px 100px",
        xs: "100px 50px",
      },
      marginLeft: "auto",
      gridGap: "1.3rem",
      width: { lg: 280, xs: 200 },
    }}
  >
    <Button
      size="small"
      sx={{
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 0,
        color: "white",
        fontSize: { lg: 10, xs: 7 },
        p: 1,
        height: 20,
        "&:hover": {
          background: "#012241",
          opacity: 0.8,
          transition: "0.8s",
        },
      }}
    >
      <Skeleton />
    </Button>
    <Button
      sx={{
        color: "white",
        fontSize: { lg: 10, xs: 7 },
        p: 1,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 0,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 0,
        height: 20,
        "&:hover": {
          background: "#bd2424",
          opacity: 0.8,
          transition: "0.8s",
        },
      }}
    >
     <Skeleton />
    </Button>
  </Box>
</Card>

  <Card sx={{ marginBottom: 3 }}>
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          lg: "200px 200px 200px 200px",
          xs: "100%",
          md: "400px 400px",
        },
      }}
    >
      <Box
        sx={{
          width: { lg: 200, xs: 1 },
          height: { lg: 130, xs: 200 },
        }}
      />
      <Box
        component="div"
        sx={{ display: "block", textAlign: "center", p: 2 }}
      >
        <Typography
          component="label"
          sx={{
            color: "#675B5B",
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: 700,
            fontSize: { xs: 12, lg: 15 },
          }}
        >
        </Typography>
        <Typography
          component="p"
          sx={{ fontWeight: 700, fontSize: { lg: 13, xs: 10 } }}
        >
          <Skeleton />
        </Typography>
        <Typography
          component="label"
          sx={{
            textTransform: "uppercase",
            color: "#675B5B",
            fontSize: { lg: 12, xs: 9 },
          }}
        >
          <Skeleton />
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{ display: "block", textAlign: "center", p: 2 }}
      >
        <Typography
          component="label"
          sx={{
            color: "#675B5B",
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: 700,
            fontSize: { xs: 12, lg: 15 },
          }}
        >
        </Typography>
        <Typography
          component="p"
          sx={{ fontWeight: 700, fontSize: { lg: 13, xs: 10 } }}
        >
          <Skeleton />
        </Typography>
        <Typography
          component="label"
          sx={{
            textTransform: "uppercase",
            color: "#675B5B",
            fontSize: { lg: 12, xs: 9 },
          }}
        >
        </Typography>
      </Box>
      <Box
        component="div"
        sx={{ display: "block", textAlign: "center", p: 2 }}
      >
        <Typography
          component="label"
          sx={{
            color: "#675B5B",
            textTransform: "uppercase",
            textAlign: "center",
            fontWeight: 700,
            fontSize: { xs: 12, lg: 15 },
          }}
        >
          <Skeleton />
        </Typography>
        <Typography
          component="p"
          sx={{ fontWeight: 700, fontSize: { lg: 13, xs: 10 } }}
        >
          <Skeleton />
        </Typography>
      </Box>
    </Box>
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          lg: "150px 100px",
          xs: "100px 50px",
        },
        marginLeft: "auto",
        gridGap: "1.3rem",
        width: { lg: 280, xs: 200 },
      }}
    >
      <Button
        size="small"
        sx={{
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 0,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 0,
          color: "white",
          fontSize: { lg: 10, xs: 7 },
          p: 1,
          height: 20,
          "&:hover": {
            background: "#012241",
            opacity: 0.8,
            transition: "0.8s",
          },
        }}
      >
        <Skeleton />
      </Button>
      <Button
        sx={{
          color: "white",
          fontSize: { lg: 10, xs: 7 },
          p: 1,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 0,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 0,
          height: 20,
          "&:hover": {
            background: "#bd2424",
            opacity: 0.8,
            transition: "0.8s",
          },
        }}
      >
      <Skeleton />
      </Button>
    </Box>
  </Card>
  </>
)


export default SkeletonElement