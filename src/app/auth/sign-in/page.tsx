import { Icons, SignInForm } from "@/components";
import Link from "next/link";

const SignInPage = () => {
    return (
        <div className="flex flex-col items-start max-w-sm mx-auto h-dvh overflow-hidden pt-4 md:pt-20">
            <div className="flex items-center w-full border-b border-border/80">
                <Link href="/#home" className="flex items-center gap-x-2 flex-shrink-0">
                    <img src="/icons/logo1.png" alt="Cyromics" className="w-8 h-8" />
                    <h1 className="text-lg font-medium">
                        Cyromics
                    </h1>
                </Link>
            </div>

            <SignInForm />

            <div className="flex flex-col items-start w-full">
                <div className="flex justify-center w-full">
                    <p className="text-sm text-muted-foreground">
                        Don&apos;t have an account?{" "}
                        <Link href="/" className="text-[#F85407]" >
                            Sign up
                        </Link>
                    </p>
                </div>
            </div>
            <div className="flex items-start mt-auto border-t border-border/80 py-6 w-full">
                {/* <p className="text-sm text-muted-foreground">
                    Don&apos;t have an account?{" "}
                    <Link href="/auth/sign-up" className="text-primary">
                        Sign up
                    </Link>
                </p> */}
            </div>
        </div>
    )
};

export default SignInPage
