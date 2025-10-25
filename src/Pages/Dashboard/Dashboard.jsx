import Card from "../../Components/Card/Card";
import ProjectProgressChart from "../../Components/ProjectProgressChart/ProjectProgressChart";
import FinancePieChart from "../../Components/FinancePieChart/FinancePieChart";
import ProjectCard from "../../Components/ProjectCard/ProjectCard";
import ProjectCompletionIndicator from "../../Components/ProjectCompletionIndicator/ProjectCompletionIndicator";
import ProjectRisks from "../../Components/ProjectRisks/ProjectRisks";
import ProjectPerformanceSection from "../../Components/ProjectPerformanceSection/ProjectPerformanceSection";
import RiskAssessmentChart from "../../Components/RiskAssessmentChart/RiskAssessmentChart";
import QualitySection from "../../Components/QualitySection/QualitySection";
import ImageSliderSection from "../../Components/ImageSliderSection/ImageSliderSection";

export default function Dashboard() {
  return (
    <div className="min-h-screen text-white p-2">
      {/* Header */}
      <header className="text-center mb-6">
        <h1 className="text-xl md:text-2xl font-bold">
          إنشاء مدن للورود والنباتات العطرية بمنطقة جازان – أبو عريش (المتنزه
          الوطني)
        </h1>
        <p className="text-gray-400 mt-1">أكتوبر 2025</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 mb-2">
        {/* 1 نطاق عمل المشروع */}
        <Card
          title="نطاق عمل المشروع"
          className="2xl:col-span-2 lg:col-span-6 col-span-12"
        >
          <p className="text-sm text-gray-300 leading-relaxed">
            يهدف المشروع إلى تطوير زراعة الورود والنباتات العطرية في المنطقة
            وإنشاء مشاتل متخصصة، وتطوير بنية تحتية حديثة تشمل سكن العمال
            والمرافق الخدمية.
          </p>
        </Card>

        {/* 2 مؤشر إنجاز المشروع */}
        <Card
          title="مؤشر إنجاز المشروع"
          className="2xl:col-span-2 lg:col-span-6 col-span-12"
        >
          <ProjectCompletionIndicator />
        </Card>

        {/* 3 بيانات المشروع */}
        <Card
          title="بيانات المشروع"
          className="2xl:col-span-4 lg:col-span-6 col-span-12"
        >
          <ProjectCard />
        </Card>
        {/* 4 البيانات المالية */}
        <Card
          title="البيانات المالية"
          className="2xl:col-span-4 lg:col-span-6 col-span-12"
        >
          <FinancePieChart />
        </Card>
        {/* 5 ما تم انجازة */}
        <Card
          title="ما تم انجازة"
          className="2xl:col-span-2 lg:col-span-6 col-span-12"
        >
          <div className="text-gray-300 text-sm leading-relaxed">
            <ul className="list-disc pr-6 space-y-2 text-sm">
              جاري العمل في حفر سور الشبك وجاري صب قواعد سور الشبك انتهاء صب
              الخرسانة للطابق الأرضي لكل مباني الموقع العام جاري أعمال الحدادة
              والنجارة للقواعد المسلحة.
            </ul>
          </div>
        </Card>

        {/* 6 المخاطر */}
        <Card
          title="المخاطر"
          className="2xl:col-span-2 lg:col-span-6 col-span-12"
        >
          <ProjectRisks />
        </Card>

        {/* 7 مراحل المشروع */}
        <Card
          title="مراحل المشروع"
          className="2xl:col-span-4 lg:col-span-6 col-span-12"
        >
          <ProjectProgressChart />
        </Card>

        {/* 8 الأداء */}
        <Card
          title="أداء المشروع"
          className="2xl:col-span-4 lg:col-span-6 col-span-12"
        >
          <ProjectPerformanceSection />
        </Card>

        {/* 9 تقييم المخاطر */}
        <Card
          title="تقييم المخاطر"
          className="2xl:col-span-4 lg:col-span-6 col-span-12"
        >
          <RiskAssessmentChart />
        </Card>

        {/* 10 إدارة الجودة */}
        <Card
          title="إدارة الجودة"
          className="2xl:col-span-4 lg:col-span-6 col-span-12"
        >
          <QualitySection />
        </Card>

        {/* 11 معرض صور */}
        <Card className="2xl:col-span-4 lg:col-span-12 col-span-12">
          <ImageSliderSection />
        </Card>
      </div>
    </div>
  );
}
