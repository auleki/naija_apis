import Link from "next/link";
import SummaryCard from "../components/cards/SummaryCard";
import Searchbar from "../components/forms/Searchbar";
import SearchbarResults from "../components/forms/SearchbarResults";

export default function Dashboard() {
    return (
        <div className={"flex gap-4 flex-wrap"}>
            {/* <h2 className={"text-green-300"}>Dashboard</h2> */}
            <div className="flex gap-4">
                <SummaryCard
                    title="Total APIs"
                    value="21" />

                <SummaryCard
                    title="Total Users"
                    value="30" />

                <SummaryCard
                    title="Total Requests"
                    value="1,500" />
            </div>

            <div>
                <Searchbar />
                <br />
                <SearchbarResults />
            </div>
            {/* 
            <SummaryCard 
              title="Total Subscriptions"
                value="5" />
            
            <SummaryCard 
            title="Total Categories"
                value="10" />

            <SummaryCard 
            title="Total Feedback"
                value="25" />

            <SummaryCard 
            title="Total Support Tickets"
                value="10" /> */}


        </div>
    )
}