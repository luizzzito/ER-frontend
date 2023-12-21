import { Box, Pagination, Stack, Typography } from "@mui/material";
import ShowProfiles from "./profiles/show-profiles";
import {
  filtersContainer,
  filtersContainerBackground,
  navBarStyles,
  pageContainer,
  catalogueContainer,
  searchBarContainer,
} from "./styles/styles";
import Filters from "./filters";
import CatalogueSearchBar from "./components/SearchBar";
import useSetCatalogueProfiles from "./profiles/use-set-catalogue-profiles";
import useCataloguePagination from "./profiles/pagination/use-catalogue-pagination";

const CatalogueContent = () => {
  const { profileList, pagination, currentPage, setCurrentPage } =
    useSetCatalogueProfiles();
  const { onPageChange } = useCataloguePagination({ setCurrentPage });

  return (
    <>
      {profileList && pagination ? (
        <>
          {" "}
          <Box sx={navBarStyles}>fakenavbar por ahora</Box>
          <Box sx={pageContainer}>
            <Box sx={catalogueContainer}>
              <Box sx={filtersContainerBackground}>
                <Box sx={filtersContainer}>
                  <Filters />
                </Box>
              </Box>

              <Box sx={{ width: "100%", height: "90%" }}>
                <Box sx={searchBarContainer}>
                  <CatalogueSearchBar />
                </Box>
                <ShowProfiles profileList={profileList!} />

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    my: "46px",
                  }}
                >
                  <Stack spacing={2}>
                    <Pagination
                      count={pagination.totalPages}
                      page={currentPage}
                      shape="rounded"
                      color="primary"
                      size="large"
                      onChange={onPageChange}
                    />
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        </>
      ) : (
        <Typography>PAPA PAPA </Typography>
      )}
    </>
  );
};

export default CatalogueContent;
