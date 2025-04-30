export const myViewConfig = {
    version: "1.0.16",
    name: "Embryonic Mouse Cerebellum STARmap",
    description: "",
    datasets: [
      {
        uid: "A",
        name: "JSON Files", // changeable
        files: [
          {
            url: "data/e11_processed_cells.json",
            type: "obs",
            fileType: "cells.json"
          },
          {
            url: "data/e11_processed_cell-sets.json",
            type: "obsSets",
            fileType: "cell-sets.json"
          },
          {
            url: "data/e11_processed_clusters.json",
            type: "obsSets", 
            fileType: "cell-sets.json" 
          },
          {
            url: "data/e11_processed_molecules.json",
            fileType: "molecules.json", 
            type: "molecules" // not sure if this is the right one 
          }
        //   {
        //     url: "data/E11.zarr", 

        //   }
        ]
      }
    ],
    coordinationSpace: {
      dataset: {
        A: "A"
      }
    },
    layout: [
      {
        component: "description", 
        coordinationScopes: {
            dataset: "A"
        },
        x: 0, y: 0, w: 2, h:6, 
        props: {
            description: "Embryonic Mouse Cerebellum STARmap"
        }
      },
      {
        component: "layerController",
        coordinationScopes: {
            dataset: "A"
        },
        x:0, y:6, w:2, h:6
      }, 
      {
        component: "spatial", 
        coordinationScopes: {
            dataset: "A"
        },
        x:2, y:0, w:12, h:12
      },
      {
        component: "featureList", 
        coordinationScopes: {
            dataset: "A"
        },
        x:10, y:6, w:2, h:6
      }, 
      {
        component: "obsSets", 
        coordinationScopes: {
            dataset: "A"
        },
        x:10, y:0, w:2, h:6
      },
      {
        component: "heatmap", 
        coordinationScopes: {
            dataset: "A"
        },
        x:6, y:0, w:4, h:12,
        props: {
            transpose:true}
        }
    ],
    initStrategy: "auto"
  };