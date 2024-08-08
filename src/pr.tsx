// // Define the GraphData type according to the structure of the data you expect.
// interface GraphData {
//     // Your GraphData structure here
//   }
  
//   const ProfileContent: React.FC = () => {
//     const { instance, accounts } = useMsal();
//     const [graphData, setGraphData] = useState<GraphData | null>(null);
  
//     const RequestProfileData = async () => {
//       try {
//         const response = await instance.acquireTokenSilent({
//           ...loginRequest,
//           account: accounts[0],
//         });
  
//         const data: GraphData = await callMsGraph(response.accessToken);
//         setGraphData(data);
//       } catch (error) {
//         console.error(error);
//         setGraphData(null); // Optionally reset the state on error
//       }
//     };
  
//     // Render your component
//     return (
//       <div>
//         {/* Your JSX here */}
//       </div>
//     );
//   };
  
//   // Example definition for callMsGraph function
//   async function callMsGraph(accessToken: string): Promise<GraphData> {
//     // Implementation to fetch and return data as GraphData
//   }
  