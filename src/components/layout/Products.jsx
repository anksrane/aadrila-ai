import {ProductFeatureBlock} from "../index";

import {Sidebanner1} from "../../assets/index";
import {Sidebanner2} from "../../assets/index";
import {Sidebanner3} from "../../assets/index";

export default function Products() {
  return (
    <section
      id="products"
      className="w-full flex justify-center py-16 md:py-24 scroll-mt-[88px]"
    >
      <div className="w-full max-w-[1440px] px-4">
        <div className="max-w-[1280px] mx-auto">
          
          {/* Section Heading */}
          <p className="text-[18px] text-[#B45C2E] font-medium">
            features and benefits.
          </p>

          <h2 className="text-[28px] md:text-[36px] font-bold text-[var(--color-text-darker)]">
            Our Products
          </h2>

          {/* Product #1 */}
          <ProductFeatureBlock
            badge="DocSim"
            title="AI-Powered Document Similarity Engine"
            image={Sidebanner1}
            features={[
              "Detects near-duplicates and tampered documents.",
              "Identifies fraudulent patterns across large repositories.",
              "Multi-language support for global adaptability.",
            ]}
            benefits={[
              "Save 30% time on manual checks.",
              "Reduce document fraud by up to 40%.",
            ]}
          />

          {/* Product #2 (reversed layout) */}
          <ProductFeatureBlock
            badge="DocPilot"
            title="Streamline Document Workflows with Automation"
            image={Sidebanner2}
            reversed  
            features={[
              "Automates document collection, routing, and task assignments.",
              "Real-time tracking with advanced dashboards.",
              "Seamless integration with enterprise systems via APIs.",
            ]}
            benefits={[
              "Reduce turnaround times by 50%.",
              "Improve operational efficiency with minimal manual effort.",
            ]}
          />

          {/* Product #3 (reversed layout) */}
          <ProductFeatureBlock
            badge="Doxtract"
            title="Extract, Validate, and Process Documents with Ease"
            image={Sidebanner3}  
            features={[
              "OCR and NLP-based data extraction.",
              "Handles unstructured documents across industries.",
              "Validates fields using external data sources.",
            ]}
            benefits={[
              "Process 10,000+ documents in minutes.",
              "Achieve 99% data accuracy with AI-driven validation.",
            ]}
          />
        </div>
      </div>
    </section>
  );
}
