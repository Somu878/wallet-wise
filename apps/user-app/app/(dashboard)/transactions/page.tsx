import { getServerSession } from "next-auth";
import { authOptions } from "../../lib/auth";
import prisma from "@repo/db/client";
import { OnRampTransactions } from "../../../components/OnRampTransaction";

async function getOnRampTransactions() {
  const session = await getServerSession(authOptions);
  const txns = await prisma.onRampTransaction.findMany({
    where: {
      userId: Number(session?.user?.id),
    },
  });
  return txns.map(
    (t: { startTime: any; amount: any; status: any; provider: any }) => ({
      time: t.startTime,
      amount: t.amount,
      status: t.status,
      provider: t.provider,
    })
  );
}

async function page() {
  const transactions = await getOnRampTransactions();
  return (
    <div className="w-screen">
      <div className="text-4xl text-[#326ba8] pt-8 px-4 mb-8 font-bold">
        Transactions
      </div>
      <div className="p-10">
        <OnRampTransactions transactions={transactions} />
      </div>
    </div>
  );
}

export default page;
