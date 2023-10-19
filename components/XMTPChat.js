import { XMTP } from "./XMTP";

export default function XMTPChat() {
    return (
        <div class="h-screen w-full flex antialiased text-gray-800 bg-white overflow-hidden">
        <div class="flex-1 flex flex-col">
            <main class="flex-grow flex flex-row min-h-0">
                <XMTP.sidebar/>
                <section class="flex flex-col flex-auto border-l">
                    <XMTP.head/>
                    <XMTP.msgBody/>
                    <XMTP.footer/>
                </section>
            </main>
        </div>
    </div>
    );
}
