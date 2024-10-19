import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config"; // Your Firebase config

export const getClickData = async () => {
  const clicksCollection = collection(db, "clicks"); // Replace "clicks" with your collection name

  try {
    const querySnapshot = await getDocs(clicksCollection);
    const clicks = querySnapshot.docs.map(doc => doc.data());
    return clicks;
  } catch (error) {
    console.error("Error fetching click data: ", error);
  }
};

export const aggregateClicksByResource = (clicks) => {
    const clickCount = {};
    clicks.forEach(click => {
        const resource = click.resource;
        if (clickCount[resource]) {
            clickCount[resource]+=1;
        }
        else {
            clickCount[resource] = 1;
        }
    })
    // Convert the map to an array for sorting
    const rankedResources = Object.keys(clickCount).map(resource => ({
        resource,
        clickCount: clickCount[resource]
    }));

    // Sort by click count in descending order
    rankedResources.sort((a, b) => b.clickCount - a.clickCount);

    return rankedResources;
}