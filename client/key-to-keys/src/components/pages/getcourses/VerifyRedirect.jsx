import { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

const VerifyRedirect = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const reference = params.get("reference");
    const email = localStorage.getItem("userEmail");

    if (!reference || !email) return;

    fetch("https://learnkeytokeys.com/api/verify-payment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ reference, email })
    })
      .then(res => res.json())
      .then(data => {
        if (data.status === "success") {
          localStorage.setItem(
            "paymentSuccess",
            JSON.stringify({
              email,
              reference,
              link: "https://drive.google.com/file/d/1Pe9J5nPtxBm14mrVvfJeugSCLwqwC0ox/view",
            })
          );
          navigate("/thank-you");
        } else {
          alert("Payment failed");
        }
      })
      .catch(() => alert("Error verifying payment"));
  }, [params, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center text-center p-4">
      Verifying your payment, please wait...
    </div>
  );
};

export default VerifyRedirect;
