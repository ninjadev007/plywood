import ActiveStage from "@/components/ActiveStage"
import FormProvider from "@/context/FormContext"
import StageForm from "@/components/StageForm"
import React from "react"

export default function Home() {
  return (
    <main className="h-screen p-24">
      <FormProvider>
        <div className="flex flex-row h-full w-full border-2 border-gray-100 rounded-lg">
          <div className="p-10 w-3/12 h-full border-r-2 border-gray-100">
            <ActiveStage />
          </div>
          <div className="p-10 w-9/12 h-full">
            <StageForm />
          </div>
        </div>
      </FormProvider>
    </main>
  )
}
