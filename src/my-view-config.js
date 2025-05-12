export const myViewConfig = {
    version: "1.0.16",
    name: "Embryonic Mouse Cerebellum STARmap",
    description: "Spatial transcriptomics map of the embryonic mouse cerebellum. SPARTseq data from E11 timepoint.",
    datasets: [
      {
        uid: "A",
        name: "Zarr-converted AnnData File", // config using only the singular Zarr format
        files: [
          {
            fileType: "anndata.zarr", 
            url: "data/E11_Normalized.zarr", // using the normalized data for spatial coords 
            coordinationValues: {
                dataset: "A", 
                obsType: "obs", 
                featureType: "gene", 
                featureValueType: "expression",
                embeddingType: "UMAP"
            },
            options: {
                obsFeatureMatrix: {
                    path: "X", 
                },
                obsEmbedding: [
                    {
                        path: "obsm/X_umap",
                        embeddingType: "UMAP"
                    }
                    // can add pca as well after this 
                ],
                obsLocations: {
                    path: "obsm/spatial", 
                },
                obsSets: [
                    {
                        name: "Cell Type", path: "obs/cell_types" 
                    },
                    {
                        name: "Finer Cell Types", path: "obs/finer_cell_types" 
                    },
                    {
                        name: "Leiden Clusters", path: "obs/leiden" 
                    },
                    {
                        name: "AP Slice", path: "obs/library_id" // from 1 to 4 being A-P 
                    }
                    // can add more from the obs variable in anndata if needed
                ],
                featureSelection: {
                    path: "var/highly_variable"
                }
            }
          }
        ]
      }
    ],
    coordinationSpace: {
      dataset: {
        A: "A"
      },
      obsType: {
        A: "obs"
      },
      featureType: {
        A: "gene"
      },
      featureValueType: {
        A: "expression"
      },
      embeddingType: {
        A: "UMAP"
      },
      featureSelection: {
        A: null
      }
    },
    layout: [
      {
        component: "spatial", 
        coordinationScopes: {
            dataset: "A",
            obsType: "A", 
            featureType: "A", 
            featureValueType: "A",
            featureSelection: "A"
        },
        x: 0, y: 0, w: 6, h:6, 
        props: {
            description: "Embryonic Mouse Cerebellum STARmap"
        }
      },
      {
        component: "scatterplot",
        coordinationScopes: {
            dataset: "A",
            obsType: "A", 
            embeddingType: "A", 
            featureType: "A", 
            featureValueType: "A", 
            featureSelection: "A"
        },
        x:6, y:0, w:6, h:6
      }, 
      {
        component: "obsSets", 
        coordinationScopes: {
            dataset: "A",
            obsType: "A"
        },
        x:0, y:6, w:3, h:6
      },
      {
        component: "featureList", 
        coordinationScopes: {
            dataset: "A",
            featureType: "A", 
            featureSelection: "A"
        },
        x:3, y:6, w:3, h:6
      }, 
      {
        component: "heatmap", 
        coordinationScopes: {
            dataset: "A",
            featureType: "A", 
            featureValueType: "A", 
            featureSelection: "A"
        },
        x:6, y:6, w:6, h:6,
        props: {
            transpose:true}
        }
    ],
    initStrategy: "auto"
  };